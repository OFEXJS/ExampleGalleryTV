import { MotionPlugin } from '@vueuse/motion'

export const motion = MotionPlugin

// 预设动画配置
export const fadeUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -30
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 30
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

export const slideUp = {
  initial: {
    opacity: 0,
    y: 50
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

// 滚动触发动画
export const scrollFadeUp = {
  initial: {
    opacity: 0,
    y: 50
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}