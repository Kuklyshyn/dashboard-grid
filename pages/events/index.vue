<template>
    <div class="w-full h-full flex flex-col">
        <div class="tab-nav">
            <div class="tab-nav-header">
                <input v-model.lazy="filterTab" ref="tabs" type="radio" id="overview" name="tabs" value="overview">
                <label class="tab-nav-header__item" :class="{active: filterTab === 'overview'}" for="overview">Overview</label>
                <input v-model.lazy="filterTab" ref="tabs" type="radio" id="eventlist" name="tabs" value="eventlist">
                <label class="tab-nav-header__item" :class="{active: filterTab === 'eventlist'}" for="eventlist">Event list</label>
            </div>
        </div>
        <Overview v-if="filterTab === 'overview'" />
        <Eventlist v-if="filterTab === 'eventlist'" />
    </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  setup() {
    const filterTab = ref('eventlist')

    return {
        filterTab
    }
  }
}
</script>