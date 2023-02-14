<template>
    <div class="b-dashboard__content">
        <div class="b-dashboard__content-filter">
          <div class="left">
            <div class="b-filter">
                <div class="b-filter__item-status-box">
                      <Icon name="Calendarwhite" width="16" height="16" />
                      <div class="b-filter__item-status-current">All time</div>
                      <Icon class="ml-2.5 arrow" name="Arrowdown" width="16" height="16" />
                  </div>
                  <ul class="b-filter__item-status-list">
                      <li @click="setFilter('time', 'All time')">All time</li>
                      <li @click="setFilter('time', 'In Scheduled')">Part time</li>
                  </ul>
            </div>
            <div class="b-filter">
              <div class="b-filter__item-status-box">
                    <Icon name="Tag" width="16" height="16" />
                    <div class="b-filter__item-status-current">All categories</div>
                    <Icon class="ml-2.5 arrow" name="Arrowdown" width="16" height="16" />
                </div>
                <ul class="b-filter__item-status-list">
                    <li @click="setFilter('time', 'All time')">All time</li>
                    <li @click="setFilter('time', 'In Scheduled')">Part time</li>
                </ul>
            </div>
            <div class="b-filter">
              <div class="b-filter__item-status-box">
                    <Icon name="Tags" width="16" height="16" />
                    <div class="b-filter__item-status-current">All categories</div>
                    <Icon class="ml-2.5 arrow" name="Arrowdown" width="16" height="16" />
                </div>
                <ul class="b-filter__item-status-list">
                    <li @click="setFilter('time', 'All time')">All time</li>
                    <li @click="setFilter('time', 'In Scheduled')">Part time</li>
                </ul>
            </div>
            <div class="b-filter">
              <div class="b-filter__item-status-box">
                  <Icon name="Eye" width="16" height="16" />
                  <div class="b-filter__item-status-current">All audience</div>
                  <Icon class="ml-2.5 arrow" name="Arrowdown" width="16" height="16" />
              </div>
              <ul class="b-filter__item-status-list">
                  <li @click="setFilter('time', 'All time')">All audience</li>
                  <li @click="setFilter('time', 'In Scheduled')">Visible to all customers</li>
                  <li @click="setFilter('time', 'All time')">Visible only to all unregistered users</li>
                  <li @click="setFilter('time', 'In Scheduled')">Visible only to all registered users</li>
                  <li @click="setFilter('time', 'All time')">Visible to a segmented audience</li>
                  <li @click="setFilter('time', 'In Scheduled')">Visible to selected users</li>
              </ul>
            </div>
          </div>
          <div class="right flex flex-row">
            <button @click="()=>{modeView = 'list'}"  class="b-filter-btn wide" :class="{ active : modeView === 'list' }">
              <Icon name="List" width="20" height="20" />
              List
            </button>
            <button @click="()=>{modeView = 'cards'}" class="b-filter-btn wide" :class="{ active : modeView === 'cards' }">
              <Icon name="Cards" width="20" height="20" />
              Cards
            </button>
            <button class="b-filter-btn">
              <Icon name="Search" width="20" height="20" />
            </button>
            <button class="b-filter-btn">
              <Icon name="Settings" width="20" height="20" />
            </button>
          </div>
        </div>
        <div class="b-dashboard__content-grid" :class="{ list : modeView === 'list'}">
            <Griditem 
              v-for="item in data" 
              :key="item.id"
              :title="item.title"
              :id="item.id"
              :category="item.category"
              :mode="modeView"
            />
        </div>
    </div>
</template>
<script>
import { ref, watch, onMounted } from 'vue';
export default {
  async setup() {
    const filterTab = ref('overview');
    const modeView = ref('cards');
    const { data } = await useFetch('https://fakestoreapi.com/products?limit=11');
    return {
        filterTab, data, modeView
    }
  }
}
</script>