from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import SupportRequest, ContactMessage, CheckInSubmission, ResourceArticle, TeamMember, FAQ
from .serializers import (
    SupportRequestSerializer,
    ContactMessageSerializer,
    CheckInSubmissionSerializer,
    ResourceArticleSerializer,
    TeamMemberSerializer,
    FAQSerializer,
)

class SupportRequestViewSet(viewsets.ModelViewSet):
    queryset = SupportRequest.objects.all().order_by('-created_at')
    serializer_class = SupportRequestSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer

class CheckInSubmissionViewSet(viewsets.ModelViewSet):
    queryset = CheckInSubmission.objects.all().order_by('-created_at')
    serializer_class = CheckInSubmissionSerializer

class ResourceArticleViewSet(viewsets.ModelViewSet):
    queryset = ResourceArticle.objects.all().order_by('-published_at')
    serializer_class = ResourceArticleSerializer
    lookup_field = 'slug'

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('order')
    serializer_class = TeamMemberSerializer

class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all().order_by('order')
    serializer_class = FAQSerializer
