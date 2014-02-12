from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from django.conf import settings

from django.contrib import admin
admin.autodiscover()

print settings.TEMPLATE_DIRS

urlpatterns = patterns('',
    # Examples:
    url(r'^$',TemplateView.as_view(template_name="asana_tools/index.html")),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
