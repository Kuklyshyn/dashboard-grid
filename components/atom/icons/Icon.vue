<template>
    <div class="b-icon" :class="class">
       <component :is="iconComponent" :width="width" :height="height"></component>    
    </div>
</template>
<script lang="ts">
import { IconProps } from '@/types/components/atoms/Icon.types'
import { useIcon, useSize } from '../../../composebles/useIcon'
import { PropType, defineComponent, ref, shallowRef } from 'vue'
export default defineComponent({
    props: {
        name: {
            type: String as PropType<IconProps['name']>,
            required: true
        },
        width: {
            type: String as PropType<IconProps['width']>,
            default: '20'
        },
        height: {
            type: String as PropType<IconProps['height']>,
            default: '20'
        },
        class: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { getIconComponent } = useIcon()
        const iconComponent = shallowRef(getIconComponent(props.name))
        watch(
            () => props.name,
            () => (iconComponent.value = getIconComponent(props.name))
        )
        return {
            iconComponent
        }
        
    }
})
</script>