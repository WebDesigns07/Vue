<template>
    <div>
        <h1 v-if="name === ''">Your Profile</h1>
        <h1 v-else>{{name}} Profile</h1>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: ""
            }
        },
        created() {
            let name = this.$route.params.name;
            this.name = name === undefined ? "" : name;
        },
        beforeRouteEnter(to, from, next){
            console.log("route enter, fetch some data");
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log("route leave, save/cleanup state");
            next();
        }
    }
</script>

<style lang="scss" scoped>

</style>