export default function BtnunderSlide({
  PosIndex,
  DataImg,
  NextIndex,
  valueX,
  setPosIndex,
  setValueX,
  setDataImg,
  setNextIndex,
  DataSet
}) {
  return (
    <div className="flex gap-4 w-full justify-center">
      {/* ฺButton1 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 0 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 1) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 2) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 3) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 4) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 4);
          } else if (PosIndex === 5) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 5);
          } else if (PosIndex === 6) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 7 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 6);
          } else if (PosIndex === 7) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 700);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 8 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 7);
          } else if (PosIndex === 8) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX - 800);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 9 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 8);
          } else if (PosIndex === 9) {
            setPosIndex(0);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 1 */}

      {/* ฺButton 2 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 1 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 2) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 3) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 4) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 5) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 4);
          } else if (PosIndex === 6) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 5);
          } else if (PosIndex === 7) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 7 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 6);
          } else if (PosIndex === 8) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 700);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 8 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 7);
          } else if (PosIndex === 9) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX - 800);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 9 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 8);
          } else if (PosIndex === 0) {
            setPosIndex(1);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 2 */}

      {/* ฺButton 3 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 2 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 3) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 4) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 5) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 6) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 4);
          } else if (PosIndex === 7) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 5);
          } else if (PosIndex === 8) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 7 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 6);
          } else if (PosIndex === 9) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX - 700);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 8 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 7);
          } else if (PosIndex === 0) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 1) {
            setPosIndex(2);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 3 */}

      {/* ฺButton 4 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 3 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 4) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 5) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 6) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 7) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX - 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 4);
          } else if (PosIndex === 8) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX - 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 5);
          } else if (PosIndex === 9) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX - 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 7 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 6);
          } else if (PosIndex === 0) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
          } else if (PosIndex === 1) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 2) {
            setPosIndex(3);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 4 */}

      {/* ฺButton 5 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 4 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 5) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 6) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 7) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 8) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX - 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 4);
          } else if (PosIndex === 9) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX - 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 5);
          } else if (PosIndex === 0) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX + 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 4);
          } else if (PosIndex === 1) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
          } else if (PosIndex === 2) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 3) {
            setPosIndex(4);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 5 */}

      {/* ฺButton 6 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 5 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 6) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 7) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 8) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 9) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX - 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 4);
          } else if (PosIndex === 0) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX + 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 5);
          } else if (PosIndex === 1) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX + 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 4);
          } else if (PosIndex === 2) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
          } else if (PosIndex === 3) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 4) {
            setPosIndex(5);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 6 */}

      {/* ฺButton 7 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 6 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 7) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 8) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 9) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX - 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 3);
          } else if (PosIndex === 0) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX + 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 6);
          } else if (PosIndex === 1) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX + 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 5);
          } else if (PosIndex === 2) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX + 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 4);
          } else if (PosIndex === 3) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
          } else if (PosIndex === 4) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 5) {
            setPosIndex(6);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 7 */}
      {/* ฺButton 8 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 7 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 8) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 9) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX - 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 2);
          } else if (PosIndex === 0) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 700);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 7);
          } else if (PosIndex === 1) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 6);
          } else if (PosIndex === 2) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 5);
          } else if (PosIndex === 3) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 4);
          } else if (PosIndex === 4) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
          } else if (PosIndex === 5) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 6) {
            setPosIndex(7);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 8 */}

      {/* ฺButton 9 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 8 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 9) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX - 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex - 1);
          } else if (PosIndex === 0) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 800);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 7 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 8);
          } else if (PosIndex === 1) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 700);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 7);
          } else if (PosIndex === 2) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 6);
          } else if (PosIndex === 3) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex +5);
          } else if (PosIndex === 4) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 4);
          } else if (PosIndex === 5) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
          } else if (PosIndex === 6) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
          } else if (PosIndex === 7) {
            setPosIndex(8);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
          }
        }}
      ></button>
      {/* Button 9 */}
      {/* ฺButton 10 */}
      <button
        className={`w-2 h-2 rounded-full ${
          PosIndex === 9 && DataImg[PosIndex].active
            ? "bg-gray-600"
            : "bg-gray-400"
        }`}
        onClick={() => {
          if (PosIndex === 0) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 900 );
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 8 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 9);
            DataImg.push(...DataSet)
          } else if (PosIndex === 1) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 800);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 7 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 8);
            DataImg.push(...DataSet)
          } else if (PosIndex === 2) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 700);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 6 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 7);
            DataImg.push(...DataSet)
          } else if (PosIndex === 3) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 600);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 5 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 6);
            DataImg.push(...DataSet)
          } else if (PosIndex === 4) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 500);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 4 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 5);
            DataImg.push(...DataSet)
          } else if (PosIndex === 5) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 400);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 3 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 4);
            DataImg.push(...DataSet)
          } else if (PosIndex === 6) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 300);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 2 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 3);
            DataImg.push(...DataSet)
          } else if (PosIndex === 7) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 200);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex + 1 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 2);
            DataImg.push(...DataSet)
          } else if (PosIndex === 8) {
            setPosIndex(9);
            setValueX((prevValueX) => prevValueX + 100);
            setDataImg((prevData) =>
              prevData.map((item, index) => ({
                ...item,
                active: index === NextIndex - 0 ? "true" : "false",
              }))
            );
            setNextIndex(NextIndex + 1);
            DataImg.push(...DataSet)
          }
        }}
      ></button>
      {/* Button 10 */}
    </div>
  );
}
