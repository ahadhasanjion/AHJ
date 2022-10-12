import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
const Qdetails = ({ data, setRight, setWrong }) => {
  const { options, id, question, correctAnswer } = data;

  const showCorrectAnswer = (correctAnswer) => {
    Swal.fire(correctAnswer);
  };

  const handleCorrectAnswer = (correctAnswer, option) => {
    if (option !== correctAnswer) {
      Swal.fire({
        title: "Wrong!",
        text: "Your Answer is wrong",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      setWrong((old) => old + 1);
    } else {
      Swal.fire("Good job!", "Your Answer is Correct", "success");
      setRight((previus) => previus + 1);
    }
  };

  return (
    <div>
      <div className="w-70 h-70 mt-5 py-8 text-green-700 ">
        <button onClick={() => showCorrectAnswer(correctAnswer)}>
          <Icon icon="fontisto:eye" width="25" height="25" />
        </button>
        <div dangerouslySetInnerHTML={{ __html: question }}></div>
        <div className=" my-4 mx-24">
          <div className="grid lg:grid-cols-2 sm:cols-1 md:col-1  border-rounded-4 gap-2 list-none">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleCorrectAnswer(correctAnswer, option)}
                className="border py-3 hover:bg-green-400 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qdetails;
