from django.test import TestCase
from rest_framework.test import APIClient
from .models import Product

class ProductAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.product = Product.objects.create(
            name="DD Free Dish Receiver",
            slug="dd-free-dish-receiver",
            category="DTH",
            condition="WHOLESALE",
            description="FTA Receiver",
            price=650.00,
            wholesale_price=480.00
        )

    def test_list_products(self):
        response = self.client.get('/api/v1/products/')
        self.assertEqual(response.status_code, 200)

    def test_filter_products_by_condition(self):
        response = self.client.get('/api/v1/products/?condition=WHOLESALE')
        self.assertEqual(response.status_code, 200)
