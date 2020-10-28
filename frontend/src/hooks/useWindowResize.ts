import * as React from 'react'

const useWindowResize = (): {x: number, y: number} => {

  const [size, setSize] = React.useState({x: 0, y: 0})

  React.useLayoutEffect(() => {

    const updateSize = () => {
      setSize({x: window.innerWidth, y: window.innerHeight})
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)

  }, [])
  return size
}

export default useWindowResize