import { mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('ListItem.vue', () => {

    let wrapper
    const propsData = {
        item: {
            title: 'Test Title',
            description: 'Test description. This one is longer.',
            id: 1
        }
    }

    const testText = type => {
        const text = wrapper.find('#pt-' + type + '-' + propsData.item.id).text();
        expect(text).toMatch(propsData.item[type]);
    }

    beforeEach(() => {
        wrapper = mount(ListItem, { propsData });
    })

    describe('Render', () => {
        it('Renders title', () => {
            testText('title')
        })
        it('Renders description', () => {
            testText('description')
        })
        it('Renders icon', () => {
            //TODO: Test how icons are displayed before writing test
        })
    })

    describe('Function', () => {
        it('Changes URL when clicked', () => {
            //TODO: Test how routing works, then write test
        })
    })
})
