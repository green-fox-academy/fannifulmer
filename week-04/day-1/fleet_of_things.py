from fleet import Fleet
from thing import Thing

fleet = Fleet()

milk = Thing('Get milk')
obstacles = Thing('Remove the obstacles')
stand = Thing('Stand up')
lunch = Thing('Eat lunch')

# Create a fleet of things to have this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch
fleet.add(milk)
fleet.add(obstacles)
fleet.add(stand)
stand.complete()
fleet.add(lunch)
lunch.complete()
print(fleet)
