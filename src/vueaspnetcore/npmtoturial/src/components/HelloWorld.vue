<template>
    <div>{{message}}
        <span>
            Bababa
        </span>
        <h1>Babababa</h1>
    </div>
</template>

<script>
    export default{
            data(){
                return {
                    message: "Hello World! component"
                }
            }
    }
</script>

<style lang="stylus" scoped>
@import '../styles/main'
div 
    color red

h
    color primary

</style>