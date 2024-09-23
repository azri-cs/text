/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { isLinkToSelfWithHash } from './../helpers/links.js'

/**
 * Get a list of all paragraphs that can be converted into a preview.
 *
 * @param {Document} doc - the prosemirror doc
 * @return {Array} paragraphs with one link only found in the doc
 */
export default function extractLinkParagraphs(doc) {
	const counter = new Map()
	const paragraphs = []

	doc.descendants((node, offset) => {
		if (node.type.name !== 'paragraph') {
			return
		}
		// ignore paragraphs that cannot be converted
		if (!previewPossible(node)) return
		paragraphs.push(Object.freeze({
			offset,
		}))
	})

	return paragraphs
}

/**
 * Is it possible to convert the currently selected node into a preview?
 * @param {object} state current editor state
 * @param {object} state.selection current selection
 * @return {boolean}
 */
function previewPossible(node) {
	if (hasOtherContent(node)) {
		return false
	}
	const href = extractHref(node.firstChild)
	if (!href || isLinkToSelfWithHash(href)) {
		return false
	}
	return true
}

/**
 * Does the node contain more content than the first child
 * @param {object} node node to inspect
 * @return {boolean}
 */
function hasOtherContent(node) {
	return node.childCount > 2
		|| (node.childCount === 2 && node.lastChild.textContent.trim())
}

/**
 * Get the link href of the given node
 * @param {object} node to inspect
 * @return {string} The href of the link mark of the node
 */
function extractHref(node) {
	if (!node) {
		return undefined
	}
	const link = node.marks.find(mark => mark.type.name === 'link')
	return link?.attrs.href
}
