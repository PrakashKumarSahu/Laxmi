from django.test import TestCase
from rest_framework.test import APIClient
from .models import Service, RepairEnquiry

class ServiceAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.service = Service.objects.create(
            name="Mixer Repair",
            slug="mixer-repair",
            short_description="Coupler fix",
            full_description="Detailed mixer repair",
            price_range="₹150 - ₹500"
        )

    def test_list_services(self):
        response = self.client.get('/api/v1/services/')
        self.assertEqual(response.status_code, 200)

    def test_create_repair_enquiry(self):
        data = {
            "customer_name": "Test User",
            "phone": "9876543210",
            "device_type": "Mixer Grinder",
            "issue_description": "Motor issue"
        }
        response = self.client.post('/api/v1/services/enquiry/', data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(RepairEnquiry.objects.count(), 1)
