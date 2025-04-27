/**
 * Returns all the elements of the given node which nodeName match the given name.
 * @param  {Node} node - The node to use to find the matches.
 * @param  {String} name - The name to look for.
 * @return {Array<ChildNode>}
 */
function childrenByName(node: Node, name: string): ChildNode[] {
  const children = [];
  for (const childKey in node.childNodes) {
    const child = node.childNodes[childKey];

    if (
      child.nodeName === name ||
      name === `vmap:${child.nodeName}` ||
      child.nodeName === `vmap:${name}`
    ) {
      children.push(child);
    }
  }
  return children;
}

/**
 * Parses a node value giving priority to CDATA as a JSON over text, if CDATA is not a valid JSON it is converted to text
 * @param  {Node} node - The node to parse the value from.
 * @return {String|Object}
 */
function parseNodeValue(node: Node): string | object {
  if (!node || !node.childNodes) {
    return {};
  }
  const childNodes = node.childNodes;

  // Trying to find and parse CDATA as JSON
  const cdatas = [];
  for (const childKey in childNodes) {
    const childNode = childNodes[childKey];

    if (childNode.nodeName === "#cdata-section") {
      cdatas.push(childNode);
    }
  }

  if (cdatas && cdatas.length > 0) {
    try {
      return JSON.parse((cdatas[0] as CDATASection).data);
    } catch (e) {}
  }

  // Didn't find any CDATA or failed to parse it as JSON
  let nodeText = "";
  for (const childKey in childNodes) {
    const childNode = childNodes[childKey];

    switch (childNode.nodeName) {
      case "#text":
        nodeText += childNode.textContent ? childNode.textContent.trim() : "";
        break;
      case "#cdata-section":
        nodeText += (childNode as CDATASection).data;
        break;
    }
  }
  return nodeText;
}

/**
 * Parses an XML node recursively.
 * @param  {Node} node - The node to parse.
 * @return {Object}
 */
function parseXMLNode(node: Node): {
  attributes: Record<string, string>;
  children: Record<string, any>;
  value: string | object;
} {
  const parsedNode = {
    attributes: {} as Record<string, string>,
    children: {} as Record<string, any>,
    value: {},
  };

  parsedNode.value = parseNodeValue(node);

  const attributes = (node as Element).attributes;
  if (attributes) {
    for (const attrKey in attributes) {
      const nodeAttr = attributes[attrKey];

      if (
        nodeAttr.nodeName &&
        nodeAttr.nodeValue !== undefined &&
        nodeAttr.nodeValue !== null
      ) {
        parsedNode.attributes[nodeAttr.nodeName as string] =
          nodeAttr.nodeValue as string;
      }
    }
  }

  const childNodes = node.childNodes;
  if (childNodes) {
    for (const childKey in childNodes) {
      const childNode = childNodes[childKey];
      if (childNode.nodeName && childNode.nodeName.substring(0, 1) !== "#") {
        parsedNode.children[childNode.nodeName as string] =
          parseXMLNode(childNode);
      }
    }
  }

  return parsedNode;
}

export { childrenByName, parseNodeValue, parseXMLNode };
