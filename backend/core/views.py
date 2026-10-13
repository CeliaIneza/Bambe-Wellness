from rest_framework import mixins, viewsets

from .models import (
    SupportRequest,
    ContactMessage,
    CheckInSubmission,
    ResourceArticle,
    TeamMember,
    FAQ,
)
from .serializers import (
    SupportRequestSerializer,
    ContactMessageSerializer,
    CheckInSubmissionSerializer,
    ResourceArticleSerializer,
    TeamMemberSerializer,
    FAQSerializer,
)


# Visitors can submit forms, but cannot list, read, edit, or delete submissions.
class SupportRequestViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = SupportRequest.objects.all()
    serializer_class = SupportRequestSerializer


class ContactMessageViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


class CheckInSubmissionViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = CheckInSubmission.objects.all()
    serializer_class = CheckInSubmissionSerializer


# Public visitors can read website content but cannot modify it through the API.
class ResourceArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResourceArticle.objects.all().order_by('-published_at')
    serializer_class = ResourceArticleSerializer
    lookup_field = 'slug'


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.all().order_by('order')
    serializer_class = TeamMemberSerializer


class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.all().order_by('order')
    serializer_class = FAQSerializer
