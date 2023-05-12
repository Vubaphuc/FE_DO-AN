import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";

function HoaDonVaBaoHanhPage() {
  const { control } = useForm();

  function generateRandomNumber() {
    const min = 100000;
    const max = 999999;
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    let arr = num.toString().split("");
    let uniqueArr = [...new Set(arr)];
    while (uniqueArr.length !== arr.length) {
      num = Math.floor(Math.random() * (max - min + 1) + min);
      arr = num.toString().split("");
      uniqueArr = [...new Set(arr)];
    }
    return num;
  }

  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <form>
            <div className="row py-2">
              <div className="col-6">
                <Link to={"/"} className="btn btn-default">
                  <i className="fas fa-chevron-left"></i> Quay lại
                </Link>
                <button type="submit" className="btn btn-info px-4">
                  Lưu
                </button>
                <Link to={"/"} className="btn btn-secondary">
                  Thêm Sản phẩm
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* đoạn này để thêm sản phẩm thứ n + 1 */}
                <div className="card">
                  <div className="card-body">
                    <div className="table-sp-kh">
                      <div className="col-md-5">
                        <h4 className="mb-4">Thông Tin Sản Phẩm</h4>
                        <div className="form-group">
                          <label>Hãng Điện Thoại</label>
                          <input
                            type="text"
                            className="form-control"
                            id="hang-san-pham"
                          />
                        </div>
                        <div className="form-group">
                          <label>Model</label>
                          <input
                            type="text"
                            className="form-control"
                            id="model"
                          />
                        </div>
                        <div className="form-group">
                          <label>Số IME</label>
                          <input
                            type="text"
                            className="form-control"
                            id="so-IME"
                          />
                        </div>
                        <div className="form-group">
                          <label>Mổ Tả Lỗi</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ten-loi"
                          />
                        </div>
                        <div className="form-group">
                          <label>Số Lượng</label>
                          <input
                            type="text"
                            className="form-control"
                            id="so-luong"
                          />
                        </div>
                        <div className="form-group">
                          <label>Giá Tiền</label>
                          <input
                            type="text"
                            className="form-control"
                            id="gia-tien"
                          />
                        </div>
                        <div className="form-group">
                          <label>Thành Tiền</label>
                          <input
                            type="text"
                            className="form-control"
                            id="thanh-tien"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="table-sp-kh">
                      <div className="col-md-5">
                        <h4 className="mb-4">Hóa Đơn</h4>
                        <div className="form-group">
                          <label>Mã Hóa Đơn</label>
                          <input
                            type="text"
                            className="form-control"
                            id="hang-san-pham"
                          />
                        </div>
                        <div className="form-group">
                          <label>Họ Và Tên Khách Hàng</label>
                          <input
                            type="text"
                            className="form-control"
                            id="model"
                          />
                        </div>
                        <div className="form-group">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            className="form-control"
                            id="so-IME"
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ten-loi"
                          />
                        </div>
                        <div className="form-group">
                          <label>Loại Bảo Hành</label>
                          <input
                            type="text"
                            className="form-control"
                            id="gia-tien"
                          />
                        </div>
                        <div className="form-group">
                          <label>Thời gian bảo hành</label>
                          <input
                            type="text"
                            className="form-control"
                            id="thanh-tien"
                          />
                        </div>
                        <div className="form-group">
                          <label>Tổng Số Tiền Thanh Toán</label>
                          <input
                            type="text"
                            className="form-control"
                            id="so-luong"
                          />
                        </div>

                        <div className="form-group">
                          <label>Thành Tiền</label>
                          <input
                            type="text"
                            className="form-control"
                            id="thanh-tien"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default HoaDonVaBaoHanhPage;
