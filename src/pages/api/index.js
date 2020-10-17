import CorePages from '@uniono/core/docs'
import ReactPages from '@uniono/react/docs'
import StatePages from '@uniono/state/docs'

import createMarkdownPage from '../../ui/markdown'

const createAPIPages = (prefix, pages) => 
	Object.keys(pages).reduce((agg, key) => {
		if (key === 'index') {
			return agg
		}
		
		agg[`${prefix}/${key}`] = createMarkdownPage({ url: pages[key] })
		return agg
	}, { [prefix]: createMarkdownPage({ url: pages.index }) })

export default {
	...createAPIPages('api/core', CorePages),
	...createAPIPages('api/state', StatePages),
	...createAPIPages('api/react', ReactPages)
}