from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import SupportRequest, ContactMessage, CheckInSubmission

class CoreAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_contact_message(self):
        payload = {
            "name": "Jean-Luc Habimana",
            "email": "jeanluc@example.rw",
            "phone": "+250788123456",
            "reason": "general",
            "message": "Hello, I would like to learn more about Bambe Center workshops.",
        }
        response = self.client.post('/api/contact/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_211_CREATED if hasattr(status, 'HTTP_211_CREATED') else 201)
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.first().name, "Jean-Luc Habimana")

    def test_create_support_request(self):
        payload = {
            "name": "Mugisha Eric",
            "email": "eric@example.rw",
            "phone": "+250788654321",
            "preferred_contact": "phone",
            "topics": ["stress", "anxiety"],
            "message": "Looking for someone to talk to regarding exam pressure.",
        }
        response = self.client.post('/api/support-requests/', payload, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(SupportRequest.objects.count(), 1)

    def test_create_checkin_submission(self):
        payload = {
            "score": 7,
            "category": "moderate",
            "responses": {"q1": 2, "q2": 1, "q3": 2, "q4": 1, "q5": 1},
        }
        response = self.client.post('/api/check-in/', payload, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(CheckInSubmission.objects.count(), 1)
