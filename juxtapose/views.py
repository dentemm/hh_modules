from django.views.generic import DetailView

from braces.views import JSONResponseMixin

from .models import JuxtaposeData

# Create your views here.

class SingleItem(JSONResponseMixin, DetailView):

  model = JuxtaposeData

  def get(self, request, *args, **kwargs):
    self.object = self.get_object()

    context_dict = {
      u"before": self.object.image1.url,
      u"after": self.object.image2.url
    }

    return self.render_json_response(context_dict)
