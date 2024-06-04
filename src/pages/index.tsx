import { useCounterStore } from "@/stores/counter";
import { Button, Flex, notification } from "antd";

export default function Index() {
  const [count, setCount] = useState(0);
  const { bears, increment } = useCounterStore();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  }, buttonRef);

  return (
    <Flex align="center" gap="middle" vertical>
      <div className="text-lg">Hello React !</div>

      <Button
        type="primary"
        onClick={() => setCount(count + 1)}
        ref={buttonRef}
      >
        {count}
      </Button>

      <div className="text-lg">bears</div>

      <Button type="primary" onClick={() => increment()}>
        {bears}
      </Button>
    </Flex>
  );
}
