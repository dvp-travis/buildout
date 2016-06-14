# Buildout SDK

This is a NodeJS SDK for communicating with the [Buildout](https://buildout.com/) API.

There are separate classes for each type of entity: Broker, Property, PropertyPhoto, and LeaseSpace, each with methods for fetching, creating, updating, or deleting data where applicable.

The SDK provides the usual CRUD operations on defined entities. Since these are usually similar, many methods have a common structure. All methods return promises that will be resolved differently, depending on the type of method invoked. There may be additional parameters in some cases, but here are the commonalities:
- All `list` methods accept `limit` and `offset` parameters, similar to the functionality in MySQL. These methods will return a promise that will be resolved with an array of records, based on search criteria.
- All `get` methods take the ID of the entity to be fetched. These methods will return a promise that will be resolved with an object representing the requested entity.
- All `create` and `add` methods require an object representing the entity to be created. These methods will return a promise that will be resolved with an object representing the requested entity (now with an ID populated).
- All `update` methods require the ID of the entity to be updated as well as an object representing the properties of the object to be updated. Any properties not included in this object will not be updated. These methods will return a promise that will be resolved with no parameter (void).
- All `remove` methods require the ID of the entity to be removed. These methods will return a promise that will be resolved with no parameter (void).

Here is a list of available methods:

**Broker**
- `list(limit, offset, email)`
- `get(id)`

**Property**
- `list(limit, offset, on_market_only)`
- `get(id)`
- `create(property)`
- `update(id, property)`

**LeaseSpace**
- `list(limit, offset)`
- `get(id)`
- `create(leaseSpace)`
- `update(id, leaseSpace)`

**PropertyPhoto**
- `add(propertyId, photo)`
- `update(propertyId, photoId, photo)`
- `remove(propertyId, photoId)`