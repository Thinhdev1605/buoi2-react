import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';

import './App.css';

import { Card } from './components/Card';

import BoKhungChinh from './layouts/BoKhungChinh';
import TheThongKe from './components/TheThongKe';
import BangKhoaHoc from './components/BangKhoaHoc';

function App() {
  return (
    <>
      {/* PHẦN HEADER CŨ */}
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />

          <img
            src={reactLogo}
            className="framework"
            alt="React logo"
          />

          <img
            src={viteLogo}
            className="vite"
            alt="Vite logo"
          />
        </div>

        <div>
          <h1>Get started</h1>

          <div className="flex justify-center gap-4 mb-6">
            <Card
              title="Khởi tạo Project"
              desc="Sử dụng Vite và React để tạo dự án nhanh chóng."
            />

            <Card
              title="Tailwind CSS"
              desc="Cài đặt và cấu hình thành công Framework CSS."
            />
          </div>
        </div>
      </section>

      {/* DASHBOARD MỚI */}
      <BoKhungChinh>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Bảng điều khiển tổng quan
          </h2>

          <p className="text-gray-500">
            Chào mừng bạn quay trở lại hệ thống quản trị bài-tap-2.
          </p>
        </div>

        {/* Grid thống kê */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <TheThongKe
            tieuDe="Tổng sinh viên"
            conSo="1,250"
            mauSac="text-blue-600"
          />

          <TheThongKe
            tieuDe="Khóa học đang mở"
            conSo="24"
            mauSac="text-green-600"
          />

          <TheThongKe
            tieuDe="Dự án hoàn thành"
            conSo="412"
            mauSac="text-purple-600"
          />

        </div>

        {/* Bảng dữ liệu */}
        <div className="space-y-4">

          <div className="flex items-center justify-between">

            <h3 className="text-xl font-bold text-gray-800">
              Danh sách môn học mới nhất
            </h3>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
              + Thêm môn học
            </button>

          </div>

          <BangKhoaHoc />

        </div>

      </BoKhungChinh>
    </>
  );
}

export default App;