import Vue from 'vue';

import Skeleton from '/Users/liangweishi/codingLife/pwa-le/music-pwa/core/Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
