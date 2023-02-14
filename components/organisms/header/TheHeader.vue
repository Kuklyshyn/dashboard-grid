<template>
    <header class="b-dashboard-header">
        <h1 class="b-dashboard-header-title">{{ path }}</h1>
        <div class="b-dashboard-header__btn-group">
            <button class="b-dashboard-header__export">
                <Icon name="Export" width="20" height="20" />
                Export
            </button>
            <button class="b-dashboard-header__create">
                <Icon name="Pluscircle" width="20" height="20" />
                Create annoucement
            </button>
        </div>
    </header>
</template>
<script>
import { ref, watch, onMounted } from 'vue';
export default {
  setup(context) {
    const route = useRoute();
    const routeName = ref(route.name);
    const path = computed(() =>
        route.path.replace('/', '')
    )
    return {
        routeName, path
    }
  }
}
</script>