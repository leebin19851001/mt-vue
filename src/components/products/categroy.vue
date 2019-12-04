<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in classicList" :key="index">
                <my-select :title="item.title" :list="item.sub_list"/>
            </dd>
        </dl>

         <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in areaList" :key="index">
                <my-select :title="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
    </div>
</template>
<script>
import mySelect from './select'
export default {
    components: {
        mySelect
    },
    data ()  {
        return {
            classicList: [{
                title: '美食',
                type: 'food',
                sub_list: [{
                    name: '日本菜',
                    id: 'japan'
                },{
                    name: '饮品店',
                    id: 'drink'
                },{
                    name: '面包甜点',
                    id: 'cate'
                }]
            },{
                title: '酒店住宿',
                type: 'hotal',
                sub_list: [{
                    name: '温泉酒店',
                    id: 'hot_spring'
                },{
                    name: '经济型酒店',
                    id: 'economy'
                },{
                    name: '高端酒店',
                    id: 'high'
                }]
            }],
            areaList: [
                {
                    title: '推荐商圈',
                    sub_list: [
                        {
                            name: '未央',
                            id: 713702,
                        },
                         {
                            name: '高新',
                            id: 713711,
                        }
                    ]
                },

            ]
        }
    }
}
</script>