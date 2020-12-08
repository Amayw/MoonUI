const expect = chai.expect;
import Vue from 'vue'
import TabsBody from '../src/tabs-body'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(TabsBody).to.be.ok
    })

})