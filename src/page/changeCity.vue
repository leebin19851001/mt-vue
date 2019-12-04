<template>
    <div class="page-changeCity">
        <el-row class="">
            <province />
        </el-row>
        <el-row>
            <cityList title="热门城市：" :list="hostCity" />
        </el-row>
        <el-row>
            <cityList title="最近访问：" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import province from '@/components/changeCity/province';
import cityList from '@/components/changeCity/cityList';
import category from '@/components/changeCity/category';
import api from '@/api/index.js'
export default {
    data (){
        return {
            hostCity:[],
            rencentList: []

        }
    },
    created () {
        api.getHotCity().then( res => {
            this.hostCity = res.data.data.map( item => item.name);
        });
        api.getRencentCity().then( res => {
            this.rencentList = res.data.data.map( item => item.name);
        })
    },
    components: {
        province,
        cityList,
        category
    }
}
</script>