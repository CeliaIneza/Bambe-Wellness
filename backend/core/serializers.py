from rest_framework import serializers
from .models import SupportRequest, ContactMessage, CheckInSubmission, ResourceArticle, TeamMember, FAQ

class SupportRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportRequest
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class CheckInSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckInSubmission
        fields = '__all__'

class ResourceArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceArticle
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'
