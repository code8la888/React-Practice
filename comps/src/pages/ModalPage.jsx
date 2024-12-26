import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleclose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleclose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleclose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis.
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada
        ac justo eu condimentum. Vivamus facilisis quis elit non hendrerit. In
        sit amet tortor sed sapien iaculis pulvinar. Vestibulum pharetra, enim
        in interdum lobortis, orci justo viverra mi, sit amet aliquam tellus
        elit a massa. Integer condimentum mi eget accumsan viverra. Nullam
        vulputate turpis felis, ac lacinia sapien blandit venenatis. Nunc ac
        justo nec velit maximus congue. Sed sed auctor lorem. Nam in libero
        sagittis mauris interdum posuere a eu est. Fusce ante lectus, semper eu
        efficitur sit amet, condimentum vel nisl.
      </p>
    </div>
  );
}

export default ModalPage;
