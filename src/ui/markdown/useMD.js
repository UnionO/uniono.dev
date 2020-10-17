import useUnion from '@uniono/react'

const md = {
	UI: useUnion.inject('ui'),
	content: useUnion.store(null),
	load: async ({ mutations, apply }, url) => {
		mutations.content.setValue(null)
		apply()

		const response = await fetch(url)
		mutations.content.setValue(await response.text())
	}
}

export default () => useUnion(md)