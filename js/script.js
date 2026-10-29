// ============ DATA : รายการอาหาร (8 รายการ - ครบตามที่ต้องการอย่างน้อย 5) ============
const menuItems = [
  {
    id: 1,
    name: "พิซซ่าเปปเปอร์สไตล์อิตาลี",
    category: "อาหารตามสั่ง",
    desc: "ซอสมะเขือเทศอิตาลีอบอิ่ม ซุปเปอร์ชิ้นโซดิ้ม และมะม่วงป้อมสีทอง อบให้เปื่อย ๆ",
    price: 89,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "ฟริสซ์เนื้อสูตรเย็น",
    category: "ของกับข้าว",
    desc: "เนื้อสูตรเย็นเข้มข้น ชุดซอสครัวทำเองพร้อมแช่น้ำปูเส้นย่าง",
    price: 49,
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "สลัดผักสดรวมมิตร",
    category: "สุขภาพ",
    desc: "ผักสดจากสวน โยกุงย่าง เข็มข้น เกลือแห้ง และน้ำปลาพริกหยวก",
    price: 79,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "สเต๊าหมัดสันคอร์ก",
    category: "เนื้อสัตว์",
    desc: "สันคอร์กเนื้อสูง อบเนื้อจนเปื่อย ราบร้อน เสิร์ฟกับซอสเนยและผัก",
    price: 149,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "เบร็กเกาหลียำไข่ดาว",
    category: "ของกับข้าว",
    desc: "เนื้อสัตว์สับ แฮมเบร็ก ซอสชีพคู่กับซอสแจ่วและซอสพริกหยวก",
    price: 99,
    img: "https://images.unsplash.com/photo-1606787366852-32c0475f1814?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "ปาหิมะซูเปอร์ไข่พะโล้",
    category: "สปิต้าโปรตี้",
    desc: "ซูเปอร์สีม่วงกรอบ ไข่พะโล้ยางมะตูม หมูสับ และซอสบิ๊กเคี้ยว",
    price: 95,
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "ซูเปิร์นสกิลโลซ์",
    category: "ญี่ปุ่น",
    desc: "ซอสซูเปิร์นดำเข้มข้น ไข่ขาวยางมะตูม ซอสชิโอชิโอชู รสชาติพิเศษ",
    price: 109,
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "ซอสหมูเจ",
    category: "จีน",
    desc: "หมูเจอบุ้งสับ ซอสหมูชุ่ม ปอกซอสพริกหยวกและหอมใหม่ลงไป",
    price: 85,
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
  },
];

// ============ ELEMENTS ============
const menuGrid = document.getElementById("menuGrid");
const featuredCard = document.getElementById("featuredCard");
const featuredImg = document.getElementById("featuredImg");
const featuredCategory = document.getElementById("featuredCategory");
const featuredName = document.getElementById("featuredName");
const featuredDesc = document.getElementById("featuredDesc");
const featuredPrice = document.getElementById("featuredPrice");

// ============ สร้างการ์ดเมนู ============
function createMenuCard(item) {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.dataset.id = item.id;

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}" loading="lazy" />
    <div class="menu-card-body">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="menu-card-footer">
        <span class="price">฿${item.price}</span>
        <span style="color:#8a6f62;font-size:.9rem;font-weight:700;">${item.category}</span>
      </div>
    </div>
  `;

  return card;
}

// ============ แสดงผลการ์ดทั้งหมด ============
function renderMenu() {
  menuGrid.innerHTML = "";
  menuItems.forEach((item) => {
    const card = createMenuCard(item);
    card.addEventListener("click", () => showRandom(item.id));
    menuGrid.appendChild(card);
  });
}

// ============ แสดงเมนูสุด / จัดการสุ่ม ============
function displayItem(item) {
  // อัปเดตข้อมูลในส่วนแสดงผล (รูป ชื่อ คำอธิบาย ราคา)
  featuredImg.src = item.img;
  featuredImg.alt = item.name;
  featuredCategory.textContent = item.category;
  featuredName.textContent = item.name;
  featuredDesc.textContent = item.desc;
  featuredPrice.textContent = `฿${item.price}`;

  // เลือกการ์ดที่สุ่มให้เปลี่ยนสี
  document.querySelectorAll(".menu-card").forEach((card) => card.classList.remove("active"));
  const activeCard = document.querySelector(`.menu-card[data-id="${item.id}"]`);
  if (activeCard) activeCard.classList.add("active");

  // ทำ animation เวลาเปลี่ยนข้อมูล
  featuredCard.classList.remove("fade-in");
  void featuredCard.offsetWidth; // บังคับรีเริ่ม animation
  featuredCard.classList.add("fade-in");
}

// ============ ฟังก์ชันสุ่มเมนู ============
function getRandomItem() {
  return menuItems[Math.floor(Math.random() * menuItems.length)];
}

function showRandom() {
  const itemId = arguments.length > 0 ? arguments[0] : null;
  const item =
    (itemId !== null && menuItems.find((m) => m.id === itemId)) ||
    getRandomItem();
  displayItem(item);
}

// ============ เชื่อมปุ่มทั้งหมดที่มี class "btn-random" ============
document.querySelectorAll(".btn-random").forEach((btn) => {
  btn.addEventListener("click", showRandom);
});

// ============ เริ่มต้นทำงาน ============
renderMenu();
displayItem(getRandomItem());
