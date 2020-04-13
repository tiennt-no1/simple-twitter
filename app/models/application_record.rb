class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  # default database shard is primary
  connects_to database: { writing: :primary, reading: :primary_replica }
end
