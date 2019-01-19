from django.conf.urls import url
from exercise_app.views import userView, user_form_view

urlpatterns = [
    url(r'^$', userView),
    url(r'^user_form_page/', user_form_view),
]