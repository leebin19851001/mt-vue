<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <my-menu />
            </el-col>
            <el-col :span="19">
                <my-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <my-container :nav="iStyle"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <my-container :nav="recomment"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import myMenu from '@/components/index/menu';
import myLife from '@/components/index/life';
import myContainer from '@/components/index/container'
export default {
    data() {
        return {
            iStyle:{
                class: 'istyle',
                title: '有格调',
                list: [{
                    tab: 'all',
                    text: '全部',

                },{
                    tab: 'food',
                    text: '约会聚餐',
                },{
                    tab: 'spa',
                    text: '丽人SPA',
                },{
                    tab: 'movie',
                    text: '电影演出',
                },{
                    tab: 'travel',
                    text: '品质出游',
                }]
            },
            recomment: {
                class: 'youhui',
                title: '很优惠',
                list: [{
                    text:'全部',
                    tab: 'all',
                },{
                    text:'美食',
                    tab: 'food',
                },{
                    text:'休闲',
                    tab: 'arder',
                }]
            }
        }
    },
    components: {
        myMenu,
        myLife,
        myContainer
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/index.scss';
</style>