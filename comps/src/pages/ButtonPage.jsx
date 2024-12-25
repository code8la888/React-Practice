import { WiDaySunny, WiDayCloudyGusts } from "react-icons/wi";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("點擊!!!!");
  };

  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-5">
          加入收藏
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <WiDaySunny />
          加入購物車
        </Button>
      </div>
      <div>
        <Button success outline>
          <WiDayCloudyGusts />
          再見
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          歡迎回來
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <WiDayCloudyGusts />
          注意!!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
