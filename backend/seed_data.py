import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'laxmi.settings')
django.setup()

from services.models import Service
from products.models import Product
from projects.models import Project, Component
from home.models import ContactMessage

def seed():
    print("Seeding initial database content...")

    # Services
    services_data = [
        {
            "name": "Mixer & Grinder Repair",
            "slug": "mixer-grinder-repair",
            "icon_name": "Zap",
            "short_description": "Armature replacement, motor winding, coupler & blade fix.",
            "full_description": "We provide comprehensive repairing for all brands of Mixer Grinders (Bajaj, Philips, Preethi, etc.). Services include coupler replacement, motor rewinding, carbon brush change, and jar repair.",
            "price_range": "₹150 - ₹600",
            "turnaround_time": "Same Day"
        },
        {
            "name": "Air Cooler Servicing & Repair",
            "slug": "cooler-servicing-repair",
            "icon_name": "Fan",
            "short_description": "Submersible pump replacement, fan motor repair, body sealing.",
            "full_description": "Full servicing for desert and personal coolers. Replacement of water pumps, motor rewinding, switch replacement, and cooling pad installation.",
            "price_range": "₹200 - ₹800",
            "turnaround_time": "1 Day"
        },
        {
            "name": "LED TV Board & Display Repair",
            "slug": "led-tv-repair",
            "icon_name": "Tv",
            "short_description": "Backlight strip replacement, motherboard & power supply board fix.",
            "full_description": "Expert repair of LED TVs up to 65 inches. We fix audio-no-video issues, power supply failure, HDMI port issues, and LED backlight replacement with genuine parts.",
            "price_range": "₹400 - ₹2,500",
            "turnaround_time": "1-2 Days"
        },
        {
            "name": "Induction Cooker Repair",
            "slug": "induction-cooker-repair",
            "icon_name": "Cpu",
            "short_description": "IGBT replacement, coil repair, touch panel & sensor fix.",
            "full_description": "Fast diagnosis and repair of Error codes (E0, E1, E2), glass top replacement, main coil rewinding, and power IGBT transistor installation for all induction models.",
            "price_range": "₹250 - ₹750",
            "turnaround_time": "Same Day"
        },
        {
            "name": "Ceiling & Table Fan Rewinding",
            "slug": "fan-rewinding",
            "icon_name": "Wind",
            "short_description": "Copper winding, bearing replacement, capacitor replacement.",
            "full_description": "Heavy-duty copper wire winding for ceiling fans, pedestal fans, and exhaust fans. Bearing noise removal and speed optimization.",
            "price_range": "₹180 - ₹500",
            "turnaround_time": "1 Day"
        },
        {
            "name": "Iron Box & Heating Element Fix",
            "slug": "iron-box-repair",
            "icon_name": "Flame",
            "short_description": "Thermostat replacement, heating element fix, wire replacement.",
            "full_description": "Repair for dry irons and steam irons. Thermostat calibration, soleplate cleaning, thermal fuse replacement, and safety grounding checks.",
            "price_range": "₹100 - ₹350",
            "turnaround_time": "Same Day"
        }
    ]

    for item in services_data:
        Service.objects.get_or_create(slug=item["slug"], defaults=item)

    # Products
    products_data = [
        {
            "name": "HD Free-To-Air DTH Set Top Box (Bulk Available)",
            "slug": "hd-dth-set-top-box",
            "category": "DTH",
            "condition": "WHOLESALE",
            "description": "High definition DD Free Dish FTA digital satellite receiver. Comes with remote, AV cable, and power adapter. Ideal for retailers and bulk buyers.",
            "price": 650.00,
            "wholesale_price": 480.00,
            "wholesale_min_qty": 10,
            "stock_quantity": 150,
            "image_url": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80"
        },
        {
            "name": "32-inch Full HD Smart LED TV (New)",
            "slug": "32-inch-smart-led-tv-new",
            "category": "TV",
            "condition": "NEW",
            "description": "Brand new 32-inch Smart LED TV with Android OS, built-in Wi-Fi, dual HDMI, dual USB, and surround sound speakers. 1 Year Warranty.",
            "price": 8499.00,
            "stock_quantity": 8,
            "image_url": "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"
        },
        {
            "name": "Refurbished 750W 3-Jar Heavy Duty Mixer Grinder",
            "slug": "refurbished-750w-mixer-grinder",
            "category": "MIXER",
            "condition": "REFURBISHED",
            "description": "Fully serviced and refurbished 750W copper motor mixer grinder with 3 stainless steel jars. Brand new blades and carbon brushes installed. 6 Month Shop Warranty.",
            "price": 1499.00,
            "stock_quantity": 5,
            "image_url": "https://images.unsplash.com/photo-1574269909862-7e4d705a4d08?auto=format&fit=crop&w=600&q=80"
        },
        {
            "name": "2000W Smart Touch Induction Cooktop (New)",
            "slug": "2000w-induction-cooktop-new",
            "category": "INDUCTION",
            "condition": "NEW",
            "description": "2000W crystal glass touch control induction stove. Indian menu presets, auto shut off, and voltage protection.",
            "price": 2199.00,
            "stock_quantity": 12,
            "image_url": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
        },
        {
            "name": "High Speed 1200mm Ceiling Fan (Copper Winding)",
            "slug": "high-speed-ceiling-fan",
            "category": "FAN",
            "condition": "NEW",
            "description": "1200mm (48-inch) high speed ceiling fan with 100% copper motor, anti-dust blades, and low power consumption.",
            "price": 1650.00,
            "stock_quantity": 20,
            "image_url": "https://images.unsplash.com/photo-1618941709602-92849f611320?auto=format&fit=crop&w=600&q=80"
        },
        {
            "name": "Refurbished 24-inch HD LED Monitor / TV",
            "slug": "refurbished-24-inch-led-tv",
            "category": "TV",
            "condition": "REFURBISHED",
            "description": "Excellent condition 24-inch LED monitor/TV with HDMI, VGA, and AV input. Perfect for home entertainment or CCTV monitoring.",
            "price": 3800.00,
            "stock_quantity": 3,
            "image_url": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
        }
    ]

    for item in products_data:
        Product.objects.get_or_create(slug=item["slug"], defaults=item)

    # Projects
    projects_data = [
        {
            "title": "Smart Agriculture & Soil Moisture System (IoT)",
            "slug": "smart-agriculture-iot-project",
            "category": "IOT",
            "difficulty": "INTERMEDIATE",
            "description": "Automated irrigation system using ESP8266 Wi-Fi module, soil moisture sensor, and relay module to turn water pump ON/OFF automatically with mobile app updates.",
            "components_included": "NodeMCU ESP8266, Soil Moisture Sensor, 5V Relay Module, Mini Water Pump, Jumper Wires, OLED Display",
            "estimated_price": 1200.00,
            "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        },
        {
            "title": "Obstacle Avoiding Robot (Arduino)",
            "slug": "obstacle-avoiding-robot-arduino",
            "category": "ROBOTICS",
            "difficulty": "BEGINNER",
            "description": "Autonomous 2WD robot chassis guided by HC-SR04 Ultrasonic sensor mounted on SG90 Servo motor to navigate around obstacles without human intervention.",
            "components_included": "Arduino UNO R3, L298N Motor Driver, HC-SR04 Ultrasonic Sensor, SG90 Servo, 2WD Chassis Kit, 18650 Batteries",
            "estimated_price": 1450.00,
            "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
        },
        {
            "title": "Home Automation via Bluetooth / Wi-Fi",
            "slug": "home-automation-bluetooth-wifi",
            "category": "ARDUINO",
            "difficulty": "BEGINNER",
            "description": "Control 4 home electrical appliances (lights, fans) using Android Smartphone app over HC-05 Bluetooth or ESP8266 Wi-Fi.",
            "components_included": "Arduino UNO, HC-05 Bluetooth Module, 4-Channel Relay Board, Optocouplers, LCD 16x2 Display",
            "estimated_price": 980.00,
            "image_url": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
        }
    ]

    for item in projects_data:
        Project.objects.get_or_create(slug=item["slug"], defaults=item)

    # Components
    components_data = [
        {"name": "Arduino UNO R3 Microcontroller Board", "slug": "arduino-uno-r3", "category": "Microcontrollers", "price": 450.00, "stock_quantity": 40},
        {"name": "NodeMCU ESP8266 Wi-Fi Module", "slug": "nodemcu-esp8266", "category": "Microcontrollers", "price": 280.00, "stock_quantity": 50},
        {"name": "HC-SR04 Ultrasonic Distance Sensor", "slug": "hc-sr04-ultrasonic", "category": "Sensors", "price": 85.00, "stock_quantity": 60},
        {"name": "5V 4-Channel Relay Module Board", "slug": "5v-4-channel-relay", "category": "Power & Relays", "price": 160.00, "stock_quantity": 30},
        {"name": "L298N Dual H-Bridge Motor Driver", "slug": "l298n-motor-driver", "category": "Motors & Drivers", "price": 140.00, "stock_quantity": 25},
        {"name": "DHT11 Temperature & Humidity Sensor", "slug": "dht11-temperature-sensor", "category": "Sensors", "price": 95.00, "stock_quantity": 45},
        {"name": "SG90 9g Micro Servo Motor", "slug": "sg90-micro-servo", "category": "Motors & Drivers", "price": 110.00, "stock_quantity": 35},
        {"name": "0.96 inch I2C OLED Display Module (128x64)", "slug": "096-oled-display", "category": "Displays", "price": 190.00, "stock_quantity": 20}
    ]

    for item in components_data:
        Component.objects.get_or_create(slug=item["slug"], defaults=item)

    print("Database seeding successfully finished!")

if __name__ == '__main__':
    seed()
