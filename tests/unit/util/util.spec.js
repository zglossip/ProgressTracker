import {generateId} from '@/util/util'

describe('util.js', () => {
    describe('generateId()', () => {
        const page = 'test-page'
        const type = 'test-type'
        it('With ID', () => {
            const id = 34
            const result = generateId(page, type, id)
            expect(result).toMatch('pt-test-page-test-type-34')
        })
        it('Without ID', () => {
            const result = generateId(page, type)
            expect(result).toMatch('pt-test-page-test-type')
        })
    })
})