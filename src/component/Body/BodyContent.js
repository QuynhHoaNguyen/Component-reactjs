import React, { useState } from "react";
import "../../index";
import SanPham from "./SanPham";

const BodyContent = () => {
  const [spState, setSpState] = useState([
    {
      name: "BÁNH ƯỚT HEO QUAY",
      price: "45k",
      des: "Phần một người ăn bao gồm bánh ướt, heo quay, giá kiệu, rau sống và nước mắm. Heo quay thịt mềm, da giòn rụm cùng nước mắm chua chua ngọt ngọt ngon tuyệt ^^ ",
      img: "https://znews-photo.zadn.vn/w660/Uploaded/spivpdiv/2020_03_02/IMG_3565_1.JPG",
      style: {
        backgroundColor: "white",
      },
      comments: [
        {
          cus: "(avt)   Bồ Công Anh",
          cmt: "ngon lắm luôn, thịt heo quay tuyệt cú mèo",
          rep: 
          [
            { cus: "(avt)   Tri", cmt: "ngon thật, sau quay lại ăn tiếp nha" },
          ],
        },
        {
          cus: "(avt)   Bồ Công Anh Trước gió",
          cmt: "ưm, da giòn nè, nước mắm ngon nữa, ăn kèm giá kiệu với rau sống đã ds",
          rep: [{ cus: "(avt)   Tri", cmt: "no quá trời luôn he" }],
        },
        {
          cus: "(avt)   BCATg",
          cmt: "muốn ăn tiếp mấy đĩa nữa cơ mà no quá gòi, hehe",
          rep: [
            {
              cus: "(avt)   Tri",
              cmt: "Công nhận, mà 1 phần nhiều ấy chứ, ăn no đã luôn",
            },
          ],
        },
      ],
    },

    {
      name: "BÁNH TRÁNG CUỐN HEO QUAY",
      price: "50k",
      des: "Bánh tráng heo quay tất nhiên không thể thiếu bánh tráng và heo quay. Bên cạnh đó còn có bún, rau sống, dưa leo và nước chấm. Bạn có thể chọn nước mắm hay mắm nêm tuỳ khẩu vị. Đĩa heo quay được thái mỏng phục vụ cho việc cuốn bánh tráng siêu dễ",
      img: "https://bizweb.dktcdn.net/100/393/670/articles/hinh-anh-1.jpg?v=1605185995637",
      style: {
        backgroundColor: "rgb(77, 179, 243)",
      },
      comments: [
        {
          cus: "(avt)   Bồ Công Anh",
          cmt: "ngon lắm luôn, mắm nêm rất là đậm đà",
          rep: [
            { cus: "(avt)   Tri", cmt: "ngon thật, sau quay lại ăn tiếp nha" },
          ],
        },
        {
          cus: "(avt)   Bồ Công Anh Trước gió",
          cmt: "ngon quá",
          rep: [{ cus: "(avt)   Tri", cmt: "no quá trời luôn he" }],
        },
        {
          cus: "(avt)   BCATg",
          cmt: "mê mắm nêm ở đây quá",
          rep: [{ cus: "(avt)   Tri", cmt: "mua chai mắm nêm luôn ik" }],
        },
      ],
    },

    {
      name: "BÚN THỊT NƯỚNG (MẮM NÊM / NƯỚC MẮM)",
      price: "20k",
      img: "https://cdn.tgdd.vn/Files/2017/03/24/964440/cach-lam-bun-thit-nuong-ngon-7_760x450.jpg",
      des: "Một tô bún thịt nướng siêu chất lượng xin phục vụ quý bà con cô bác. Bún, thịt nướng, rau sống và chua ngọt hoà quyện với nhau thành một tô bún thơm ngon đứ đừ. Ai có thể ăn được mắm nên thì nên chọn nắm nêm sẽ tuyệt vời hơn nhiều luôn ấy.",
      style: {
        backgroundColor: "white",
      },
      comments: [
        {
          cus: "(avt)   Bồ Công Anh",
          cmt: "ngon lắm luôn, mắm nêm rất là đậm đà",
          rep: [
            { cus: "(avt)   Tri", cmt: "ngon thật, sau quay lại ăn tiếp nha" },
          ],
        },
        {
          cus: "(avt)   Bồ Công Anh Trước gió",
          cmt: "ngon quá",
          rep: [{ cus: "(avt)   Tri", cmt: "no quá trời luôn he" }],
        },
        {
          cus: "(avt)   BCATg",
          cmt: "mê mắm nêm ở đây quá",
          rep: [{ cus: "(avt)   Tri", cmt: "mua chai mắm nêm luôn ik" }],
        },
      ],
    },

    {
      name: "BÚN HEO QUAY (MẮM NÊM / NƯỚC MẮM)",
      price: "25k",
      img: "https://toplist.vn/images/800px/dac-san-xu-quang-mi-quang-amp-bun-mam-566967.jpg",
      des: "Tô bún này chỉ khác tô bún thịt nướng ở phần thịt, không còn là những miếng thịt nướng thơm lừng nữa, thay vào đó là những lát heo quay mọng nước và đậm vị ngon. Chúng ta cùng nhau ăn nhé, món ngon nhà làm ^^",
      style: {
        backgroundColor: "rgb(77, 179, 243)",
      },
      comments: [
        {
          cus: "(avt)   Bồ Công Anh",
          cmt: "ngon lắm luôn, mắm nêm rất là đậm đà",
          rep: [
            { cus: "(avt)   Tri", cmt: "ngon thật, sau quay lại ăn tiếp nha" },
          ],
        },
        {
          cus: "(avt)   Bồ Công Anh Trước gió",
          cmt: "ngon quá",
          rep: [{ cus: "(avt)   Tri", cmt: "no quá trời luôn he" }],
        },
        {
          cus: "(avt)   BCATg",
          cmt: "mê mắm nêm ở đây quá",
          rep: [{ cus: "(avt)   Tri", cmt: "mua chai mắm nêm luôn ik" }],
        },
      ],
    },
  ]);

  return (
    <content>
      {spState &&
        spState.length &&
        spState.map((Element) => {
          return <SanPham prod={Element} />;
        })}
    </content>
  );
};

export default BodyContent;
