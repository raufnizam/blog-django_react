from rest_framework import serializers
from .models import BlogPost

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ["id","title", "author", "snippet", "description" ]
        read_only_fields = ['id',"author", 'created_at', 'updated_at']

    def create(self, validated_data):
        request = self.context['request']
        validated_data['author'] = request.user  
        return super().create(validated_data)