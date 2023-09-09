import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function About() {
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    setLoading(!loading);
  }, []);

  const contentItems = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "pic1",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "pic2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "pic3",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Shopsy | Giới thiệu</title>
        <meta
          name="description"
          content="Shopsy giới thiệu hơn 1000+ sản phẩm từ các thương hiệu phổ biến với mức giá chưa từng thấy, đảm bảo hoàn tiền trong vòng 20 ngày và thanh toán khi nhận hàng!"
        />
      </Helmet>
      <div className={loading ? "" : "hidden"}>
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden w-100 p-10">
          <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    {contentItems.map((item) => (
                      <div key={item.id} className="py-3 sm:py-4">
                        <img
                          src={item.imageUrl}
                          alt={item.alt}
                          className="rounded-2xl w-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-full xl:w-1/2 px-3 sm:px-4">
                    <div className="my-4 relative z-10">
                      <img
                        src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="hình ảnh 3"
                        className="rounded-2xl w-full"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                          width="134"
                          height="106"
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="#3056D3"
                          />
                          {/* More circle translations here */}
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="-mt-2 lg:mt-0">
                  <span className="font-semibold text-lg text-gray-700 mb-2 block">
                    Gặp gỡ nhóm làm việc tạo nên{" "}
                    <span className="text-logogreen">Shopsy</span>
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl text-dark mb-8">
                    Trang Nhân Viên Shopsy
                  </h2>
                  <p className="text-base text-body-color mb-8">
                    Nhân viên của Shopsy là những cá nhân nhiệt huyết và chăm
                    chỉ, họ làm việc chăm chỉ hơn để đáp ứng nhu cầu của bạn.
                    Mọi ý tưởng được chia sẻ và mọi cơ hội được nắm bắt bởi bạn
                    đã giúp chúng tôi đạt được những thành tựu. Lời khen ngợi
                    đến sự cống hiến của bạn! Sự chăm chỉ của một nhân viên là
                    nhiên liệu cho văn hóa công ty tốt. Cảm ơn bạn đã đóng góp
                    thêm vào của chúng tôi. Đó là sự tận tụy của bạn đã góp phần
                    vào thành công của chúng tôi. Cảm ơn bạn đã truyền cảm hứng
                    cho chúng tôi!
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "https://www.github.com/Vilayat-Ali")
                    }
                    className="bg-logogreen hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                  >
                    Gặp Lập Trình Viên
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={loading ? "hidden" : "h-500"}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "90vh" }}
        >
          <div className="flex">
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce200"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full animate-bounce400"></div>
          </div>
        </div>
      </div>
    </>
  );
}
