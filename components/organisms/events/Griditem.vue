<template>
    <div class="b-dashboard__item" :class="{ wide: mode === 'list' }">
        <div class="b-dashboard__item-image">
            <!-- I leave static image -->
            <img src="~/assets/img/user/Cover.png" alt="1" />
            <div class="b-dashboard__item-status">
                <div class="b-dashboard__item-status-box">
                    <div class="b-dashboard__item-status-current" :class="{active: status === 'In Scheduled'}">{{ status }}</div>
                    <img src="~/assets/img/icons/arrow-down.svg" alt="arrow" />
                </div>
                <ul class="b-dashboard__item-status-list">
                    <li @click="setStatus('In Approval')">In Approval</li>
                    <li @click="setStatus('In Scheduled')">In Scheduled</li>
                </ul>
            </div>
            <div class="b-dashboard__item-edit">
                <div @click="toggleEdit" class="b-dashboard__item-edit-btn">
                    <img src="~/assets/img/icons/more-edit.svg" alt="1" />
                </div>
                <div v-if="edit" ref="targetEdit" class="b-dashboard__item-edit-panel">
                    <nav>
                        <ul>
                            <li>
                                <img src="~/assets/img/icons/info.svg" alt="info" /> 
                                Information
                            </li>
                            <li>
                                <img src="~/assets/img/icons/edit.svg" alt="edit" /> 
                                Edit
                            </li>
                            <li>
                                <img src="~/assets/img/icons/delete.svg" alt="archive" /> 
                                Archive
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="b-dashboard__item-info">
            <ul class="b-dashboard__item-flags">
                <li>
                    <img src="~/assets/img/flags/English.svg" alt="English" />
                </li>
                <li>
                    <img src="~/assets/img/flags/CzechRepublic.svg" alt="CzechRepublic" />
                </li>
                <li>
                    <img src="~/assets/img/flags/Slovakia.svg" alt="Slovakia" />
                </li>
            </ul> 
            <h3 class="b-dashboard__item-title">Information for visitors of our Simplaq Mall</h3>
            <p class="b-dashboard__item-text">
                {{ title }}
            </p>  
            <div class="b-dashboard__item-brand">
                <div class="b-dashboard__item-brand-info">
                    <div class="b-dashboard__item-brand-img">
                        <img src="~/assets/img/user/zara.svg" alt="zara" />
                    </div>
                    {{ category }}
                </div>
                <button class="b-dashboard__item-brand-btn">Store event</button>
            </div>  
            <Datepicker v-model="date" format="MMM dd, yyyy p" range></Datepicker>
        </div>
    </div>
</template>
<script>
import { ref, watch, onMounted } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import { onClickOutside } from '@vueuse/core';
export default {
  components: { Datepicker },
  props: {
        title: {
            type: String
        },
        id: {
            type: Number
        },
        category: {
            type: String
        },
        mode: {
            type: String,
            default: 'cards'
        }
    },
  setup() {
    const targetEdit = ref(null)
    const date = ref();
    const edit = ref(false);
    const status = ref('In Approval');

    onMounted(() => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        date.value = [startDate, endDate];
    });

    function setStatus(a) {
        status.value = a;
    }
    
    function toggleEdit() {
        edit.value = !edit.value;
    }

    onClickOutside(targetEdit, (event) => edit.value = !edit.value)


    return {
        date, status, setStatus, edit, toggleEdit, targetEdit
    }

    
  }
}
</script>