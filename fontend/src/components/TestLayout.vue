<template>
<HeaderTest @toggle-sidebar="toggleSidebar" />
<router-view />
<FooterBanner />
<QuestionTestMenu :isSidebarHidden="isSidebarHidden"/>
<LoginFormTest />

</template>

<script>
import FooterBanner from './FooterBanner.vue';
import HeaderTest from './HeaderTest.vue';
import LoginFormTest from './LoginFormTest.vue';
import QuestionTestMenu from './QuestionTestMenu.vue';

export default{
    name: "TestLayout",
    components: {
        HeaderTest,
        FooterBanner,
        QuestionTestMenu,
        LoginFormTest,
    },
    data() {
        return {
            isSidebarHidden: true,
        };
    },
    methods: {
        toggleSidebar() {
        this.isSidebarHidden = !this.isSidebarHidden;
        }
    }
}
</script>