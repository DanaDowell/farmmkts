class MarketSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :dayweek
end
