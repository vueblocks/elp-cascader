import Popper from 'element-ui/src/utils/vue-popper'

const MigratingProps = {
  expandTrigger: {
    type: String,
    newProp: 'expandTrigger'
  },
  changeOnSelect: {
    type: Boolean,
    newProp: 'checkStrictly'
  },
  hoverThreshold: {
    type: Number,
    newProp: 'hoverThreshold'
  }
}

const PopperMixin = {
  data: Popper.data,
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    offset: Popper.props.offset,
    arrowOffset: Popper.props.arrowOffset,
    appendToBody: Popper.props.appendToBody,
    popperOptions: Popper.props.popperOptions,
    boundariesPadding: Popper.props.boundariesPadding
  },
  methods: Popper.methods,
  beforeDestroy: Popper.beforeDestroy
}

const InputSizeMap = {
  medium: 36,
  small: 32,
  mini: 28
}

export {
  MigratingProps,
  PopperMixin,
  InputSizeMap
}
