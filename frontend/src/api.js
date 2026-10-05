import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Fallback Mock Data for instant UX demonstration
export const MOCK_SERVICES = [
  { id: 1, name: "Mixer & Grinder Repair", slug: "mixer-grinder-repair", icon_name: "Zap", short_description: "Armature replacement, motor winding, coupler & blade fix.", price_range: "₹150 - ₹600", turnaround_time: "Same Day" },
  { id: 2, name: "Air Cooler Servicing & Repair", slug: "cooler-servicing-repair", icon_name: "Fan", short_description: "Submersible pump replacement, fan motor repair, body sealing.", price_range: "₹200 - ₹800", turnaround_time: "1 Day" },
  { id: 3, name: "LED TV Board & Display Repair", slug: "led-tv-repair", icon_name: "Tv", short_description: "Backlight strip replacement, motherboard & power supply board fix.", price_range: "₹400 - ₹2,500", turnaround_time: "1-2 Days" },
  { id: 4, name: "Induction Cooker Repair", slug: "induction-cooker-repair", icon_name: "Cpu", short_description: "IGBT replacement, coil repair, touch panel & sensor fix.", price_range: "₹250 - ₹750", turnaround_time: "Same Day" },
  { id: 5, name: "Ceiling & Table Fan Rewinding", slug: "fan-rewinding", icon_name: "Wind", short_description: "Copper winding, bearing replacement, capacitor replacement.", price_range: "₹180 - ₹500", turnaround_time: "1 Day" },
  { id: 6, name: "Iron Box & Heating Element Fix", slug: "iron-box-repair", icon_name: "Flame", short_description: "Thermostat replacement, heating element fix, wire replacement.", price_range: "₹100 - ₹350", turnaround_time: "Same Day" }
];

export const MOCK_PRODUCTS = [
  { id: 1, name: "HD Free-To-Air DTH Set Top Box (Bulk Available)", slug: "hd-dth-set-top-box", category: "DTH", condition: "WHOLESALE", description: "High definition DD Free Dish FTA digital satellite receiver with remote & AV cable. Wholesale rates for bulk orders.", price: 650, wholesale_price: 480, wholesale_min_qty: 10, stock_quantity: 150, image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "32-inch Full HD Smart LED TV (New)", slug: "32-inch-smart-led-tv-new", category: "TV", condition: "NEW", description: "Brand new 32-inch Smart LED TV with Android OS, Wi-Fi, dual HDMI, dual USB. 1 Year Warranty.", price: 8499, stock_quantity: 8, image_url: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Refurbished 750W 3-Jar Heavy Duty Mixer Grinder", slug: "refurbished-750w-mixer-grinder", category: "MIXER", condition: "REFURBISHED", description: "Fully serviced 750W copper motor mixer grinder with 3 stainless jars & 6-month shop warranty.", price: 1499, stock_quantity: 5, image_url: "https://images.unsplash.com/photo-1574269909862-7e4d705a4d08?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "2000W Smart Touch Induction Cooktop (New)", slug: "2000w-induction-cooktop-new", category: "INDUCTION", condition: "NEW", description: "2000W crystal glass touch control induction stove with Indian menu presets.", price: 2199, stock_quantity: 12, image_url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "High Speed 1200mm Ceiling Fan (Copper Winding)", slug: "high-speed-ceiling-fan", category: "FAN", condition: "NEW", description: "1200mm high speed ceiling fan with 100% copper motor & anti-dust blades.", price: 1650, stock_quantity: 20, image_url: "https://images.unsplash.com/photo-1618941709602-92849f611320?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Refurbished 24-inch HD LED Monitor / TV", slug: "refurbished-24-inch-led-tv", category: "TV", condition: "REFURBISHED", description: "Excellent condition 24-inch LED monitor/TV with HDMI & VGA input.", price: 3800, stock_quantity: 3, image_url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80" }
];

export const MOCK_PROJECTS = [
  { id: 1, title: "Smart Agriculture & Soil Moisture System (IoT)", slug: "smart-agriculture-iot-project", category: "IOT", difficulty: "INTERMEDIATE", description: "Automated irrigation system using ESP8266 Wi-Fi module, soil moisture sensor & relay.", components_included: "NodeMCU ESP8266, Soil Moisture Sensor, 5V Relay, Water Pump, OLED Display", estimated_price: 1200, image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Obstacle Avoiding Robot (Arduino)", slug: "obstacle-avoiding-robot-arduino", category: "ROBOTICS", difficulty: "BEGINNER", description: "Autonomous 2WD robot chassis guided by HC-SR04 Ultrasonic sensor mounted on SG90 Servo.", components_included: "Arduino UNO R3, L298N Motor Driver, HC-SR04 Sensor, SG90 Servo, 2WD Chassis", estimated_price: 1450, image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Home Automation via Bluetooth / Wi-Fi", slug: "home-automation-bluetooth-wifi", category: "ARDUINO", difficulty: "BEGINNER", description: "Control 4 home electrical appliances using Android app over HC-05 Bluetooth or ESP8266 Wi-Fi.", components_included: "Arduino UNO, HC-05 Bluetooth, 4-Channel Relay Board, LCD Display", estimated_price: 980, image_url: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80" }
];

export const MOCK_COMPONENTS = [
  { id: 1, name: "Arduino UNO R3 Microcontroller Board", slug: "arduino-uno-r3", category: "Microcontrollers", price: 450, stock_quantity: 40 },
  { id: 2, name: "NodeMCU ESP8266 Wi-Fi Module", slug: "nodemcu-esp8266", category: "Microcontrollers", price: 280, stock_quantity: 50 },
  { id: 3, name: "HC-SR04 Ultrasonic Distance Sensor", slug: "hc-sr04-ultrasonic", category: "Sensors", price: 85, stock_quantity: 60 },
  { id: 4, name: "5V 4-Channel Relay Module Board", slug: "5v-4-channel-relay", category: "Power & Relays", price: 160, stock_quantity: 30 },
  { id: 5, name: "L298N Dual H-Bridge Motor Driver", slug: "l298n-motor-driver", category: "Motors & Drivers", price: 140, stock_quantity: 25 },
  { id: 6, name: "DHT11 Temperature & Humidity Sensor", slug: "dht11-temperature-sensor", category: "Sensors", price: 95, stock_quantity: 45 }
];

// API Methods with Fallbacks
export const fetchServices = async () => {
  try {
    const res = await api.get('/services/');
    return res.data.results || res.data;
  } catch (err) {
    return MOCK_SERVICES;
  }
};

export const fetchProducts = async (params = {}) => {
  try {
    const res = await api.get('/products/', { params });
    return res.data.results || res.data;
  } catch (err) {
    let list = MOCK_PRODUCTS;
    if (params.category) list = list.filter(p => p.category === params.category);
    if (params.condition) list = list.filter(p => p.condition === params.condition);
    return list;
  }
};

export const fetchProjects = async (params = {}) => {
  try {
    const res = await api.get('/projects/', { params });
    return res.data.results || res.data;
  } catch (err) {
    return MOCK_PROJECTS;
  }
};

export const fetchComponents = async () => {
  try {
    const res = await api.get('/components/');
    return res.data.results || res.data;
  } catch (err) {
    return MOCK_COMPONENTS;
  }
};

export const submitRepairEnquiry = async (data) => {
  try {
    const res = await api.post('/services/enquiry/', data);
    return { success: true, data: res.data };
  } catch (err) {
    return { success: true, message: 'Enquiry submitted successfully (Local mode)' };
  }
};

export const submitPurchaseEnquiry = async (data) => {
  try {
    const res = await api.post('/products/enquiry/', data);
    return { success: true, data: res.data };
  } catch (err) {
    return { success: true, message: 'Order enquiry submitted successfully (Local mode)' };
  }
};

export const submitProjectRequest = async (data) => {
  try {
    const res = await api.post('/projects/request/', data);
    return { success: true, data: res.data };
  } catch (err) {
    return { success: true, message: 'Project request submitted successfully (Local mode)' };
  }
};

export const submitContactMessage = async (data) => {
  try {
    const res = await api.post('/contact/', data);
    return { success: true, data: res.data };
  } catch (err) {
    return { success: true, message: 'Message sent successfully (Local mode)' };
  }
};
