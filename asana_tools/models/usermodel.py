from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    api_key = models.CharField(max_length=255, verbose_name=_('API Key'),blank=False)
    
    class Meta:
        abstract = False
        app_label = 'asana_tools'