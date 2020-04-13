class ApplicationController < ActionController::Base
  skip_forgery_protection
  around_action :switch_shard

  def switch_shard
    if params[:region] == "vietnam"
      ActiveRecord::Base.connected_to(
          database: { writing: :shard1, reading: :shard1_replica }
      ) do
        yield
      end
    else
      #default is primary and primary replica
      yield
    end
  end
end
