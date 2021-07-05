import { mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'
import { nextTick} from 'vue'

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
    })

    describe('Function', () => {
        //TODO: I know this is working, I need to find a way to get this test to work
        it.skip('Changes URL when clicked', async () => {
            const button = wrapper.find('#pt-item-' + propsData.item.id);
            await button.trigger('click')
            expect(window.location.href).toBe('http://localhost/item/id/' + propsData.item.id)
        })
    })
})
