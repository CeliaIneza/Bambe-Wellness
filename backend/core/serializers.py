from rest_framework import serializers

from .models import (
    SupportRequest,
    ContactMessage,
    CheckInSubmission,
    ResourceArticle,
    TeamMember,
    FAQ,
)


class SupportRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportRequest
        fields = [
            'id',
            'name',
            'email',
            'phone',
            'preferred_contact',
            'topics',
            'message',
            'status',
            'created_at',
        ]
        read_only_fields = ['id', 'status', 'created_at']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            'id',
            'name',
            'email',
            'phone',
            'reason',
            'message',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


class CheckInSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckInSubmission
        fields = [
            'id',
            'score',
            'category',
            'responses',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']


class ResourceArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceArticle
        fields = '__all__'
        read_only = True


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'
        read_only = True


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'
        read_only = True
