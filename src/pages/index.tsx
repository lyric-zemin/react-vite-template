import { useCounterStore } from '~/stores/counter'
import { Button, Flex } from 'antd'

export default function Index() {
  const [count, setCount] = useState(0)
  const { bears, increment } = useCounterStore()

  return (
    <Flex align="center" gap="middle" vertical>
      <div className="text-lg text-amber">Hello React !</div>

      <Button type="primary" onClick={() => setCount(count + 1)}>
        {count}
      </Button>

      <div className="text-lg text-blue">Hi bears</div>

      <Button type="default" onClick={() => increment()}>
        {bears}
      </Button>
    </Flex>
  )
}
